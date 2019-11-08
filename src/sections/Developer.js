import React from "react";
import DevelopmentImage from "../static/slider/code.jpg";
import { Container, Row } from "react-bootstrap";
import MediaArea from "./MediaArea";
import AnsibleLogo from "../static/images/ansible.svg";
import TerraformLogo from "../static/images/terraform.png";

const Developer = props => {
  return (
    <React.Fragment>
      <section className="section-header">
        <img src={DevelopmentImage} alt="Lines of code" />
        <h3>Systems development</h3>
        <p>
          I have been privileged to lead and be a member of various teams.
          Developing in many languages and using various development techniques
        </p>
        <p>
          I have been using a full DevOps approach for several years now, on
          both cloud solutions and on premise infrastructure stacks.
        </p>
      </section>
      <section>
        <h3>Languages</h3>
        <Container fluid>
          <Row>
            <MediaArea
              icon={["fab", "java"]}
              name="Java"
              content="I have had lots of experience using Java over the years. From Swing and RCP apps to full stack development with JEE and Spring. I am considered a subject matter expert in the use and implementation of the spring framework especially Spring Boot. I have run various mentoring programs around the effective use of Java."
            />
            <MediaArea
              icon={["fab", "python"]}
              name="Python"
              content="I have many years experience using both Python 2 and 3. From microservice backends to automated trading bots. I am well versed in numpy, pandas and scipy, along with web technologies like flask and django"
            />
            <MediaArea
              icon={["fab", "node-js"]}
              name={"Javascript"}
              content="My experience with Javascript, npm and nodeJs has been similarly varied. I am well versed in ReactJS and VueJS on the frontend and have utilised express to create full backends. I have also written various Lambdas for AWS using NodeJS."
            />

            <MediaArea
              logo={TerraformLogo}
              name="Ansible"
              content="Terraform is my goto orchastrator when I am provisioning virtual infrastructure. I have used it in Azure, AWS, VMWare and also on premise. Having a sturdy workhorse for IAAS processes is one of the foundational blocks in a full DevOps life cycle."
            />
            <MediaArea
              logo={AnsibleLogo}
              name="Ansible"
              content="I have used ansible extensively when setting up various infrastructures, usually paired with Terraform but also on it's own. I am experienced in using AWX to control larger infrastructure requirements."
            />
            <MediaArea
              icon="terminal"
              name="Bash"
              content="Unpinning my experience in the various languages / tools above, I have had many years of using various scripting languages. I am most familiar with bash in this respect but have used Windows Powershell as well to accomplish various tasks."
            />
          </Row>
        </Container>
      </section>
      <section>
        <p>
          Becoming an expert software developer involves more than simply
          learning the language, it also requires knowing which language is fit
          for which purpose. To this end I have become an expert in various
          languages (as outlined above) and so I can use the more relevant
          language to solve the problem at hand.
        </p>
        <p>
          As the languages evolve it is important to stay on top of the current
          evolutions of the language to become more efficient and minimise on
          the cost of maintaining the systems written. Over my career this has
          been a major driver for me, I like to always learn new things and if I
          can increase the productivity of myself and my teams that is a great
          bonus.
        </p>
        <p>
          Writing easy to follow code which follows best practices will improve
          the life of future developers when they come to modify that code. This
          is especially useful if the future developer is you, I pride myself on
          writing clean easy to follow code which I can then use to train /
          mentor others and aid to successful deliveries of my customers
          products.
        </p>
      </section>
    </React.Fragment>
  );
};

export default Developer;
