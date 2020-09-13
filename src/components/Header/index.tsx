import React, { useContext } from "react";
import { Container } from "./styles";
import Switch from "react-switch";

// to access styled-components theme info in the current component
import { ThemeContext } from "styled-components";

// to easily style color palette
import { shade } from "polished";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      {" "}
      Hello World
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={colors.secundary}
        offColor={shade(0.3, colors.secundary)}
      />
    </Container>
  );
};

export default Header;
