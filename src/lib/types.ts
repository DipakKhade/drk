export interface Post {
  metadata: {
    tags: string[];
  };
  fields: {
    title: string;
    slug: string;
    author: {
      fields: {
        picture: {
          fields: {
            title: string;
            file: {
              url: string;
              details: {
                size: number;
                image: {
                  width: number;
                  height: number;
                };
              };
              fileName: string;
              contentType: string;
            };
          };
        };
      };
    };
    exceprt: string;
    coverImage: {
      fields: {
        title: string;
        file: {
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
          fileName: string;
          contentType: string;
        };
      };
    };
    content: {
      nodeType: string;
      data: any;
      content: {
        nodeType: string;
        data: any;
        content: {
          nodeType: string;
          data: any;
          content: any[];
        }[];
      }[];
    }[];
  };
}
