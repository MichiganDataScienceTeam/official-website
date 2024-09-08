import Image from "next/image";

export default function CurrentProjectCard({ project, basePath }) {
  const projectImagePath = `${basePath ? basePath : ""}/images/projects/${
    project.image
  }`;
  const leadText = project.leads.length > 1 ? "Leads" : "Lead";

  return (
    <div style={styles.card}>
      <div style={{ ...styles.column, ...styles.projectInfo }}>
        <Image
          style={styles.projectImage}
          width="300"
          height="300"
          src={projectImagePath}
          alt={project.label}
        />
        <h3 style={styles.projectTitle}>{project.label}</h3>
      </div>
      <div style={{ ...styles.column, ...styles.leadsInfo }}>
        <h4 style={styles.leadText}>{leadText}:</h4>
        <div style={styles.leadsContainer}>
          {project.leads.map((lead, idx) => (
            <div key={idx} style={styles.lead}>
              <Image
                style={styles.leadImage}
                width="75"
                height="75"
                src={`${basePath ? basePath : ""}/images/team/${lead.image}`}
                alt={lead.name}
              />
              <p style={styles.leadName}>{lead.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#333",
    padding: "25px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "600px",
    marginBottom: "32px",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  projectInfo: {
    flex: "1 1 300px",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "16px",
  },
  projectImage: {
    borderRadius: "10%",
    objectFit: "contain",
    width: "auto",
    height: "auto",
  },
  projectTitle: {
    marginTop: "16px",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  leadsInfo: {
    flex: "0 0 35%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 1 75px",
  },
  leadText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },
  leadsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "8px",
    gap: "16px",
  },
  lead: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  leadImage: {
    borderRadius: "50%",
    objectFit: "cover",
    width: "75px",
    height: "75px",
  },
  leadName: {
    marginTop: "8px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "500",
    color: "white",
  },
};
