import styled from "styled-components"

export const HeaderContainer = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--gray-800);
  box-shadow: 0px 18px 41px rgba(0, 0, 0, 0.05);
`

export const HeaderContent = styled.div`
  /* max-width: 1120px; */
  height: 4rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  nav {
    margin-left: 5rem;
    height: 5rem;

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      color: gray;

      transition: color 0.2s;

      & + a {
        margin-left: 2rem;
      }

      &:hover {
        color: black;
      }

      &.active {
        color: black;
        font-weight: bold;
      }

      &:active::after {
        content: "";
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: yellow;
      }
    }
  }

  button {
    margin-left: auto;
    height: 3rem;
    border-radius: 3rem;
    background: var(--rosa);
    border: 0;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-weight: bold;

    svg {
      width: 20px;
      height: 20px;
    }

    svg:first-child {
      margin-right: 1rem;
    }

    svg.closeIcon {
      margin-left: 1rem;
    }

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  img {
    width: 104px;
    height: 104px;
  }
`
