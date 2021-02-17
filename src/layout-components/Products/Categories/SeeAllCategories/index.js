import React from 'react';

import { Button, ButtonGroup, Typography } from '@material-ui/core';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function SeeAllCategories() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {/* right here, implement the edit and delete category functionality */}
      {/* user should see a list of all categories present in the database*/}
      {/* user should see an edit button, and be able to edit each category names*/}
      {/* user should see a delete button, and be able to delete each category along sides it's content*/}
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography>Fruits and Vegetables</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ButtonGroup>
              <Button color="primary">Edit</Button>
              <Button color="primary">Delete</Button>
              <Button color="primary">Add Sub-category</Button>
            </ButtonGroup>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header">
          <Typography>Spices</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ButtonGroup>
              <Button color="primary">Edit</Button>
              <Button color="primary">Delete</Button>
              <Button color="primary">Add Sub-category</Button>
            </ButtonGroup>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header">
          <Typography>Dry Herbs</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ButtonGroup>
              <Button color="primary">Edit</Button>
              <Button color="primary">Delete</Button>
              <Button color="primary">Add Sub-category</Button>
            </ButtonGroup>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header">
          <Typography>Drinks</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ButtonGroup>
              <Button color="primary">Edit</Button>
              <Button color="primary">Delete</Button>
              <Button color="primary">Add Sub-category</Button>
            </ButtonGroup>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header">
          <Typography>PawPaw leaves and Roots</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ButtonGroup>
              <Button color="primary">Edit</Button>
              <Button color="primary">Delete</Button>
              <Button color="primary">Add Sub-category</Button>
            </ButtonGroup>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header">
          <Typography>Legumes</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ButtonGroup>
              <Button color="primary">Edit</Button>
              <Button color="primary">Delete</Button>
              <Button color="primary">Add Sub-category</Button>
            </ButtonGroup>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header">
          <Typography>Oils</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ButtonGroup>
              <Button color="primary">Edit</Button>
              <Button color="primary">Delete</Button>
              <Button color="primary">Add Sub-category</Button>
            </ButtonGroup>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header">
          <Typography>Flours</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ButtonGroup>
              <Button color="primary">Edit</Button>
              <Button color="primary">Delete</Button>
              <Button color="primary">Add Sub-category</Button>
            </ButtonGroup>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
}

export default SeeAllCategories;
