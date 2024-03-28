import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-nav-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-nav-800);
    background-color: var(--color-nav-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-nav-600);
  }
`;

function SidebarItem({ link, expanded, active, setActive }) {
    return (
        <li
            className={`my-4
          ${expanded ? "w-full" : "w-auto"}          
        `}
            onClick={() => setActive(link.id)}
        >
            <StyledNavLink to={`${link.routePath}`}>
                {link.icon}
                <span className={`${expanded ? "block" : "hidden"} transition-all`}>
                    {link.label}
                </span>
            </StyledNavLink>



        </li>
    );
}

export default SidebarItem
