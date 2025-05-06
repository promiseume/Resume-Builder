export type ResumeType ={
        name: string;
        title: string;
        summary:string;
        contacts: {
          phone: string;
          email: string;
          linkedin: string;
          github: string;
          website: string;
        };
        experience: Array<{
          role: string;
          company: string;
          location: string;
          years: string;
          responsibilities: string[];
        }>;
        skills: string[];
        education: string;
      };
      