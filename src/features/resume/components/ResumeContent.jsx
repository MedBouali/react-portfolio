import {
    ResumeSection,
    ExperienceItem,
    EducationItem,
    LanguagesList,
    CertificationsList,
    EXPERIENCE,
    EDUCATION,
    LANGUAGES,
    CERTIFICATIONS,
} from "@/features/resume"
import { CardSection, Button } from "@/components/ui"

function ResumeContent() {
    return (
        <>
            <div className="flex justify-center mb-8">
                <a href="/mohammed-bouali-resume.pdf" download>
                    <Button size="sm">Download</Button>
                </a>
            </div>

            <CardSection className="flex flex-col gap-12 md:flex-row md:gap-16">
                <div className="flex-1 space-y-10">
                    <ResumeSection title="Experience">
                        {EXPERIENCE.map((item, i) => (
                            <ExperienceItem key={i} item={item} />
                        ))}
                    </ResumeSection>
                </div>

                <div className="hidden md:block w-[0.05rem] my-5 bg-secondary/30" />

                <div className="flex-1 space-y-10">
                    <ResumeSection title="Education">
                        {EDUCATION.map((education, i) => (
                            <EducationItem key={i} education={education} />
                        ))}
                    </ResumeSection>

                    <ResumeSection title="Languages">
                        <LanguagesList languages={LANGUAGES} />
                    </ResumeSection>

                    <ResumeSection title="Certifications">
                        <CertificationsList certifications={CERTIFICATIONS} />
                    </ResumeSection>
                </div>
            </CardSection>
        </>
    )
}

export default ResumeContent