export interface ItrendingCourse {
  author: string;
  courseDesc: string;
  courseName: string;
  id: number;
  image: string;
  price: number;
  rating: number;
}

export interface ICourses {
  category: String;
  courseLecture: ILecture[];
  dateAdded: number;
  desc: String;
  id: number;
  level: String;
  name: String;
  price: String;
  rating: String;
  totalHours: String;
  totalLectures: number;
  image: string;
  shortDesc: string;
  courseAuthor: string;
  email: string;
}

export interface ILecture {
  desc: String;
  id: number;
  title: String;
}

export interface ICreatedCourse {
  id?: number;
  name?: string;
  totalLectures?: number;
  category?: string;
  price?: string;
  totalHours?: string;
  level?: string;
  image?: string;
  shortDesc?: string;
  courseAuthor?: string;
  email?: string;
  desc?: string;
}
