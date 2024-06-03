export interface Guide {
    id: string;
    title: string;
    content: string;
    sections: GuideSection[];
  }
  
  export interface GuideSection {
guideId: any|string;
    id: string;
    title: string;
    content: string;
  }
  