// External files

import "tippy.js/dist/tippy.css";

import Tippy from "@tippyjs/react/headless";
import { Placement } from "tippy.js";
// Internal files

// Styles

interface DefaultDropDownProps {
  children: JSX.Element;
  childrenRender: JSX.Element;
  visible?: boolean;
  placement?: Placement;
}

const DefaultDropDown: React.FC<DefaultDropDownProps> = (
  props: DefaultDropDownProps
) => {
  return (
    <div>
      <Tippy
        interactive
        visible={props.visible}
        placement={props.placement}
        appendTo={document.body}
        render={(attrs) => (
          <div tabIndex={-1} {...attrs} style={{ pointerEvents: "auto" }}>
            {props.childrenRender}
          </div>
        )}
      >
        {props.children}
      </Tippy>
    </div>
  );
};

export default DefaultDropDown;
