type BlogPostMetadata = {
  blogId: number;
  blogTitle: string;
  dateOfPublication: string;
  blogSubTitle?: string;
  blogStaticLocation: string;
};

export const blogPostsMetadata: BlogPostMetadata[] = [
  {
    blogId: 1,
    blogTitle: "Nutanix Interview Experience for MTS-1",
    dateOfPublication: "29 April 2023",
    blogStaticLocation: "./BlogContent/Nutanix-Interview-Experience-MTS.md",
    blogSubTitle:
      "My interview experience at Nutanix for the position of MTS-1(Member Of Technical Staff)",
  },
  // {
  //   blogId: 2,
  //   blogTitle: "Interview Experience for MTS-1 at Nutanix",
  //   dateOfPublication: "29 April 2023",
  //   blogStaticLocation: "./BlogContent/Nutanix-Interview-Experience-MTS.md",
  //   blogSubTitle:
  //     "My interview experience at Nutanix for the position of MTS-1(Member Of Technical Staff)",
  // },
  // {
  //   blogId: 3,
  //   blogTitle: "Interview Experience for MTS-1 at Nutanix",
  //   blogStaticLocation: "./BlogContent/Nutanix-Interview-Experience-MTS.md",
  //   dateOfPublication: "29 April 2023",
  //   blogSubTitle:
  //     "My interview experience at Nutanix for the position of MTS-1(Member Of Technical Staff)",
  // },
  // {
  //   blogId: 4,
  //   blogTitle: "Interview Experience for MTS-1 at Nutanix",
  //   blogStaticLocation: "./BlogContent/Nutanix-Interview-Experience-MTS.md",
  //   dateOfPublication: "29 April 2023",
  //   blogSubTitle:
  //     "My interview experience at Nutanix for the position of MTS-1(Member Of Technical Staff)",
  // },
];
