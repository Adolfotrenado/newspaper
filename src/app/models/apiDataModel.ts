export class apiDataModel {
  source: string = "";
  author: string = "";
  title: string = "";
  description: string = "";
  url: string = "";
  urlToImage: string = "";
  publishedAt: string = "";
  content: string = "";

  constructor(
    argSource: string,
    argAuthor: string,
    argTitle: string,
    argDescription: string,
    argUrl: string,
    argUrlToImage: string,
    argPublishedAt: string,
    argContent: string
  ) {
    this.source = argSource["name"];
    this.author = argAuthor;
    this.title = argTitle;
    this.description = argDescription;
    this.url = argUrl;
    this.urlToImage = argUrlToImage;
    this.publishedAt = argPublishedAt;
    this.content = argContent;
  }
}
