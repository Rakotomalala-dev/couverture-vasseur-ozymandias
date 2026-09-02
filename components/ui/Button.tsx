import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-slate-deep text-white border border-slate-deep hover:bg-slate-natural hover:border-slate-natural",

  cobalt:
    "bg-slate-cobalt text-white border border-slate-cobalt hover:bg-slate-deep hover:border-slate-deep",

  outline:
    "bg-transparent text-slate-deep border border-slate-deep hover:bg-slate-deep hover:text-white",

  ghost:
    "bg-transparent text-slate-deep border border-transparent hover:text-slate-cobalt",

  light:
    "bg-white text-slate-deep border border-white hover:bg-transparent hover:text-white",

  lightOutline:
    "bg-transparent text-white border border-white/30 hover:border-white",
} as const;

const sizes = {
  sm: "px-4 py-2.5 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

/**
 * ==========================================
 * NEXT.JS LINK BUTTON
 * ==========================================
 */
type LinkButtonProps = CommonProps & {
  to: string;
  href?: never;
  type?: never;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
} & Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  "href" | "className" | "children" | "onClick"
>;

/**
 * ==========================================
 * HTML ANCHOR BUTTON
 * ==========================================
 */
type AnchorButtonProps = CommonProps & {
  href: string;
  to?: never;
  type?: never;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className" | "children" | "onClick"
>;

/**
 * ==========================================
 * NATIVE BUTTON
 * ==========================================
 */
type NativeButtonProps = CommonProps & {
  to?: never;
  href?: never;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "onClick" | "className" | "children"
>;

export type ButtonProps =
  | LinkButtonProps
  | AnchorButtonProps
  | NativeButtonProps;

/**
 * ==========================================
 * COMPONENT
 * ==========================================
 */
export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "font-mono uppercase tracking-[0.15em]",
    "transition-all duration-300",
    "cursor-pointer",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  /**
   * ==========================================
   * 1. NEXT.JS LINK
   * ==========================================
   */
  if ("to" in props) {
    const linkProps = props as LinkButtonProps;

    const {
      to,
      onClick,
      className: _className,
      children: _children,
      ...rest
    } = linkProps;

    return (
      <Link
        {...rest}
        href={to}
        onClick={onClick}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  /**
   * ==========================================
   * 2. HTML ANCHOR
   * ==========================================
   */
  if ("href" in props) {
    const anchorProps = props as AnchorButtonProps;

    const {
      href,
      onClick,
      className: _className,
      children: _children,
      ...rest
    } = anchorProps;

    return (
      <a
        {...rest}
        href={href}
        onClick={onClick}
        className={classes}
      >
        {children}
      </a>
    );
  }

  /**
   * ==========================================
   * 3. NATIVE BUTTON
   * ==========================================
   */
  const buttonProps = props as NativeButtonProps;

  const {
    type = "button",
    onClick,
    className: _className,
    children: _children,
    ...rest
  } = buttonProps;

  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}

// import Link from "next/link";
// import type {
//   AnchorHTMLAttributes,
//   ButtonHTMLAttributes,
//   MouseEventHandler,
//   ReactNode,
// } from "react";
// import { cn } from "@/lib/utils";

// const variants = {
//   primary:
//     "bg-slate-deep text-white border border-slate-deep hover:bg-slate-natural hover:border-slate-natural",

//   cobalt:
//     "bg-slate-cobalt text-white border border-slate-cobalt hover:bg-slate-deep hover:border-slate-deep",

//   outline:
//     "bg-transparent text-slate-deep border border-slate-deep hover:bg-slate-deep hover:text-white",

//   ghost:
//     "bg-transparent text-slate-deep border border-transparent hover:text-slate-cobalt",

//   light:
//     "bg-white text-slate-deep border border-white hover:bg-transparent hover:text-white",

//   lightOutline:
//     "bg-transparent text-white border border-white/30 hover:border-white",
// } as const;

// const sizes = {
//   sm: "px-4 py-2.5 text-xs",
//   md: "px-6 py-3 text-sm",
//   lg: "px-8 py-4 text-sm",
// } as const;

// type ButtonVariant = keyof typeof variants;
// type ButtonSize = keyof typeof sizes;

// type CommonProps = {
//   children: ReactNode;
//   variant?: ButtonVariant;
//   size?: ButtonSize;
//   className?: string;
// };

// /**
//  * Bouton de navigation interne Next.js
//  *
//  * Exemple :
//  * <Button to="/contact" onClick={...}>
//  */
// type LinkButtonProps = CommonProps & {
//   to: string;
//   href?: never;
//   type?: never;
//   onClick?: MouseEventHandler<HTMLAnchorElement>;
// } & Omit<
//   React.ComponentPropsWithoutRef<typeof Link>,
//   "href" | "className" | "children" | "onClick"
// >;

// /**
//  * Lien HTML classique
//  *
//  * Exemple :
//  * <Button href="tel:+33241873412">
//  */
// type AnchorButtonProps = CommonProps & {
//   href: string;
//   to?: never;
//   type?: never;
//   onClick?: MouseEventHandler<HTMLAnchorElement>;
// } & Omit<
//   AnchorHTMLAttributes<HTMLAnchorElement>,
//   "href" | "className" | "children" | "onClick"
// >;

// /**
//  * Bouton HTML classique
//  *
//  * Exemple :
//  * <Button type="submit" onClick={...}>
//  */
// type NativeButtonProps = CommonProps & {
//   to?: never;
//   href?: never;
//   type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
//   onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
// } & Omit<
//   ButtonHTMLAttributes<HTMLButtonElement>,
//   "type" | "onClick" | "className" | "children"
// >;

// export type ButtonProps =
//   | LinkButtonProps
//   | AnchorButtonProps
//   | NativeButtonProps;

// export default function Button(props: ButtonProps) {
//   const {
//     children,
//     variant = "primary",
//     size = "md",
//     className,
//   } = props;

//   const classes = cn(
//     "inline-flex items-center justify-center gap-2",
//     "font-mono uppercase tracking-[0.15em]",
//     "transition-all duration-300",
//     "cursor-pointer",
//     "disabled:opacity-50 disabled:cursor-not-allowed",
//     variants[variant],
//     sizes[size],
//     className
//   );

//   /**
//    * ==========================================
//    * NAVIGATION INTERNE NEXT.JS
//    * ==========================================
//    */
//   if ("to" in props && props.to) {
//     const {
//       to,
//       onClick,
//       ...linkProps
//     } = props;

//     return (
//       <Link
//         href={to}
//         className={classes}
//         onClick={onClick}
//         {...linkProps}
//       >
//         {children}
//       </Link>
//     );
//   }

//   /**
//    * ==========================================
//    * LIEN HTML CLASSIQUE
//    * ==========================================
//    */
//   if ("href" in props && props.href) {
//     const {
//       href,
//       onClick,
//       ...anchorProps
//     } = props;

//     return (
//       <a
//         href={href}
//         className={classes}
//         onClick={onClick}
//         {...anchorProps}
//       >
//         {children}
//       </a>
//     );
//   }

//   /**
//    * ==========================================
//    * BOUTON HTML CLASSIQUE
//    * ==========================================
//    */
//   const {
//     type = "button",
//     onClick,
//     ...buttonProps
//   } = props;

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={classes}
//       {...buttonProps}
//     >
//       {children}
//     </button>
//   );
// }