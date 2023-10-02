import './Portfolio.scss';
import { Grid, Button, alpha, Fade } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// icons
import { faUser, faDownload, faHome, faSchool, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons'
import util from '../../util';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

const education = [
  {
    degree: 'B Tech',
    program: 'Information Technology',
    university: 'VIT, Vellore'
  },
  {
    degree: 'MS',
    program: 'Software Engineering',
    university: 'SJSU'
  }
]

function Portfolio() {
  var indexEducation = 1

  const [degree, setDegree] = useState(education[indexEducation].degree)
  const [program, setProgram] = useState(education[indexEducation].program)
  const [university, setUniversity] = useState(education[indexEducation].university)

  const [fadeDegree, setFadeDegree] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeDegree(false)

      setTimeout(() => {
        indexEducation = ++indexEducation % education.length
        setDegree(education[indexEducation].degree)
        setProgram(education[indexEducation].program)
        setUniversity(education[indexEducation].university)

        setFadeDegree(true)
      }, 200)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="component-portfolio">
      <Grid container direction={'column'} wrap='nowrap' justifyContent="center" height={'100vh'}>
        {/* <Grid item>
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

        <Grid item xs={2} /> */}

        {/* app bar */}
        <Grid item style={{ flex: 0 }}>
          <Grid container spacing={2} justifyContent="center" padding={util.padding}>
            <Grid item><Button variant="text" startIcon={<FontAwesomeIcon size='small' icon={faHome} />}>Home</Button></Grid>
            <Grid item><Button variant="text" startIcon={<FontAwesomeIcon size='small' icon={faSchool} />}>Education</Button></Grid>
            <Grid item><Button variant="text" startIcon={<FontAwesomeIcon size='small' icon={faBriefcase} />}>Work</Button></Grid>
            <Grid item><Button variant="text" startIcon={<FontAwesomeIcon size='small' icon={faCode} />}>Projects</Button></Grid>
            <Grid item>
              <Button variant="contained" startIcon={<FontAwesomeIcon icon={faDownload} />}>
                Resume
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* name, occupation, etc. */}
        <Grid item style={{ flex: 1 }}>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={1}>
            <Typography variant='h1' fontWeight={500}>Rahul Pillai</Typography>
            <Typography variant='h2'>
              <Fade in={fadeDegree}><span>{degree}</span></Fade> in <Fade in={fadeDegree}><span>{program}</span></Fade> @ <Fade in={fadeDegree}><span>{university}</span></Fade>
            </Typography>
          </Box>
        </Grid>

      </Grid>
    </div>
  );
}

export default Portfolio;
