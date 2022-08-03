import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="footer">
      <span>Created by Maciej Walczewski, Jul 2022.</span>
      <span>
        <FacebookIcon
          sx={{
            color: "violet",
          }}
        />
        <GitHubIcon
          sx={{
            color: "violet",
          }}
        />
      </span>
    </div>
  );
};

export default Footer;
