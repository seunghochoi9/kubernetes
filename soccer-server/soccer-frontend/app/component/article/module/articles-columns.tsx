import { Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { MyTypography } from "../../common/style/cell";
import Link from "next/link";
import { PG } from "../../common/enums/PG";
import { IArticle } from "../model/article";

interface CellType {
    row: IArticle
}

export default function ArticleColumns(): GridColDef[] {
    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'No.',
            renderCell: ({ row }: CellType) => MyTypography(row.id, "1.2rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'title',
            headerName: '제목',
            renderCell: ({ row }: CellType) =>
                <Link href={`${PG.ARTICLE}/detail/${row.id}`} className="underline" > {MyTypography(row.title, "1.2rem")} </Link>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'content',
            headerName: '내용',
            renderCell: ({ row }: CellType) => MyTypography(row.content, "1.2rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'registerDate',
            headerName: '등록일',
            renderCell: ({ row }: CellType) => MyTypography(row.regDate, "1.2rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'writer',
            headerName: '작성자',
            renderCell: ({ row }: CellType) => MyTypography(row.writer, "1.2rem")
        }
    ]

}