import styled from "styled-components";

import { useState } from "react";
import { LuChevronFirst } from "react-icons/lu";
import { LuChevronLast } from "react-icons/lu";
import SidebarItem from "./SidebarItem";
import { additionalLinks, mainLinks } from "./Links";

const StyledSidebar = styled.aside`
  background-color: var(--color-nav-grey-0);
  padding: 3.2rem 1rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items:center;
  gap: 3.2rem;
`;

function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState(mainLinks[0].id);

  return (
    <StyledSidebar className={`${expanded ? "w-full" : "w-32"}`}>
      <div className={`flex flex-col gap-4 items-center ${expanded ? "w-full" : "w-auto"}`}>
        <div
          className={`flex items-center justify-between transition-all ${expanded ? "w-full" : "w-auto"
            }`}
        >
          <div
            className={`flex items-center gap-3 overflow-hidden transition-all ${expanded ? "w-80" : "w-0"
              }`}
          >
            <img src="default-user.jpg" alt="Untitled UI" className="w-8 h-8" />
            <h2 className="text-2xl text-white font-bold line-clamp-1">
              Typewriting
            </h2>
          </div>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="p-1.5 font-bold text-gray-100 rounded-lg bg-accent-light hover:bg-accent-lighter"
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>

        <ul className={`py-3  ${expanded ? "w-80" : "w-auto"
          }`}>
          {mainLinks.map((link) => (
            <SidebarItem
              key={link.id}
              link={link}
              expanded={expanded}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>

      </div>

    </StyledSidebar>
  );
}

export default Sidebar;
