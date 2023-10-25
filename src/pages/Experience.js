import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#003262">
                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Aug 2018-Jun 2022" 
                iconStyle={{background: "#003262", color: "#fff"}}
                icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title"> Henry T. Gunderson High School</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Jose, CA</h4>
                    <p> High School Diploma </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Aug 2022-May 2025" 
                iconStyle={{background: "#003262", color: "#fff"}}
                icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title"> University of California, Berkeley</h3>
                    <h4 className="vertical-timeline-element-subtitle">Berkeley, CA</h4>
                    <p> Bachelor's Degree, Computer Science </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="vertical-timeline-element--work" 
                date="Feb 2023-May 2023" 
                iconStyle={{background: "#C4820E", color: "#fff"}}
                icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title">Undergraduate Researcher - Berkeley Law</h3>
                    <h4 className="vertical-timeline-element-subtitle">Berkeley, CA</h4>
                    <p> 
                        Utilized decades of SEC rule data to analyze trends and reached conclusions
                        about rule-making patterns and correlation with world events at certain times.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="vertical-timeline-element--work" 
                date="Jun 2023-Aug 2023" 
                iconStyle={{background: "#C4820E", color: "#fff"}}
                icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title">Software Engineer Intern - OliveX</h3>
                    <h4 className="vertical-timeline-element-subtitle">Hong Kong</h4>
                    <p> 
                        Designed and developed community engagement activities, exercise quiz websites for marketing; 
                        generated data reports and queries from mobile app database to analyze user patterns.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="vertical-timeline-element--work" 
                date="Aug 2023-Present" 
                iconStyle={{background: "#C4820E", color: "#fff"}}
                icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title">Junior Full Stack Developer (Part-Time) - OliveX</h3>
                    <h4 className="vertical-timeline-element-subtitle">Remote</h4>
                    <p> 
                        Implemented ads and updated OliveX mobile exercise apps; developed websites and Discord bots for 
                        community events along with admin tools for staff usage.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience