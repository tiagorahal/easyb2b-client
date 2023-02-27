import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';


function TimeLineDetails() {
  return (
    <VerticalTimeline lineColor='black'>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(211,211,211)", color: "black" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(211,211,211)" }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        
        icon={<CompareArrowsIcon />}
      >
        <h3 className="vertical-timeline-element-title text-lg font-bold">Produto Alterado</h3>
        <p>
          Quantidade do produto PAP A4CERT.FSC GIMBA 210x297 CX5000 75G alterada para: 10.
          <br />
          <br />
          04/01/2021 às 22:06 (2173) REQUISITANTE
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(211,211,211)", color: "black" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(211,211,211)" }}
        iconStyle={{ background: "rgb(0,128,0)", color: "#fff" }}
        icon={<AddIcon />}
      >
        <h3 className="vertical-timeline-element-title text-lg font-bold">Produto Alterado</h3>
        <p>
          Quantidade do produto PAP A4CERT.FSC GIMBA 210x297 CX5000 75G alterada para: 10.
          <br />
          <br />
          04/01/2021 às 22:06 (2173) REQUISITANTE
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(211,211,211)", color: "black" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(211,211,211)" }}
        iconStyle={{ background: "rgb(0,128,0)", color: "#fff" }}
        icon={<AddIcon />}
      >
        <h3 className="vertical-timeline-element-title text-lg font-bold">Produto Alterado</h3>
        <p>
          Quantidade do produto PAP A4CERT.FSC GIMBA 210x297 CX5000 75G alterada para: 10.
          <br />
          <br />
          04/01/2021 às 22:06 (2173) REQUISITANTE
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(211,211,211)", color: "black" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(211,211,211)" }}
        iconStyle={{ background: "rgb(0,128,0)", color: "#fff" }}
        icon={<AddIcon />}
      >
        <h3 className="vertical-timeline-element-title text-lg font-bold">Produto Alterado</h3>
        <p>
          Quantidade do produto PAP A4CERT.FSC GIMBA 210x297 CX5000 75G alterada para: 10.
          <br />
          <br />
          04/01/2021 às 22:06 (2173) REQUISITANTE
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(211,211,211)", color: "black" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(211,211,211)" }}
        iconStyle={{ background: "rgb(0,128,0)", color: "#fff" }}
        icon={<AddIcon />}
      >
        <h3 className="vertical-timeline-element-title text-lg font-bold">Produto Alterado</h3>
        <p>
          Quantidade do produto PAP A4CERT.FSC GIMBA 210x297 CX5000 75G alterada para: 10.
          <br />
          <br />
          04/01/2021 às 22:06 (2173) REQUISITANTE
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(211,211,211)", color: "black" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(211,211,211)" }}
        iconStyle={{ background: "rgb(0,128,0)", color: "#fff" }}
        icon={<AddIcon />}
      >
        <h3 className="vertical-timeline-element-title text-lg font-bold">Produto Alterado</h3>
        <p>
          Quantidade do produto PAP A4CERT.FSC GIMBA 210x297 CX5000 75G alterada para: 10.
          <br />
          <br />
          04/01/2021 às 22:06 (2173) REQUISITANTE
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(211,211,211)", color: "black" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(211,211,211)" }}
        iconStyle={{ background: "#EAB30A", color: "#fff" }}
        icon={<SaveIcon />}
      >
        <h3 className="vertical-timeline-element-title text-lg font-bold">Produto Alterado</h3>
        <p>
          Quantidade do produto PAP A4CERT.FSC GIMBA 210x297 CX5000 75G alterada para: 10.
          <br />
          <br />
          04/01/2021 às 22:06 (2173) REQUISITANTE
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default TimeLineDetails;
