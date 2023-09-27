import './Portfolio.scss';
import { Grid, Button, alpha } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// icons
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
  return (
    <div className="component-portfolio">
      <Grid container spacing={2}>
        <Grid item xs={2} />

        <Grid item xs={2}>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item>
              <FontAwesomeIcon icon={faUser} />
            </Grid>
            <Grid item>
              <Typography variant="h5" style={{ opacity: 0 }}>
                Rahul Pillai
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={2} />

        <Grid item xs={4}>
          <Button variant="text">Home</Button>
          <Button variant="text">Education</Button>
          <Button variant="text">Work</Button>
          <Button variant="text">Projects</Button>
          <Button variant="contained" startIcon={<FontAwesomeIcon icon={faDownload} />}>
            Resume
          </Button>
        </Grid>

        <Grid item xs={2} />
      </Grid>
    </div>
  );
}

export default Portfolio;
