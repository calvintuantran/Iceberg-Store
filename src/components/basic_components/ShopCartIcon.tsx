import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

interface CountProps {
  countCartItem: number;
}
export default function CustomizedBadges(props: CountProps) {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={props.countCartItem} color="warning">
        <ShoppingCartIcon sx={{ fontSize: "2rem", color: "white" }} />
      </StyledBadge>
    </IconButton>
  );
}
