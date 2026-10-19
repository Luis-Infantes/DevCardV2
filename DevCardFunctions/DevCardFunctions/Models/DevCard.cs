namespace DevCardFunctions.Models;

public class DevCard
{
    public Intro? Intro { get; set; }

    public List<Certification>? Certifications { get; set; }

    public List<Skill>? Skills { get; set; }

    public List<Project>? Projects { get; set; }

    //public List<ProjectSkill>? ProjectSkills { get; set; }

    public List<ProfesionalTrajectory>? ProfessionalTrajectory { get; set; }

    public List<FormalEducation>? FormalEducation { get; set; }

    public List<AdditionalTraining>? AdditionalTraining { get; set; }

    public List<Language>? Languages { get; set; }

    public List<Network>? Networks { get; set; }
}
