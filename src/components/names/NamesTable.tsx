import { createUseStyles, useTheme } from "react-jss"
import { Table } from 'antd';
import { ColumnsType } from "antd/lib/table";

type Props = {
    names :Name[],
    route :(id :string) => void
}

const useStyles = createUseStyles((theme :Theme) => ({
    table: {
        width: '100%',
        '& thead th' : {
            backgroundColor : [[theme.colorTheme.color6], '!important'],
            color: theme.colorTheme.color10,
        }
    },
    summary: {
        fontWeight : 'bold',
        backgroundColor : [[theme.colorTheme.color6], '!important'],
        color: theme.colorTheme.color10,

    },
    rowEven: {
        '& > td' : {
            backgroundColor: theme.colorTheme.color3,
            color: theme.colorTheme.color8,
            fontSize: '2vh'
        },
        '&:hover > td' : {
            backgroundColor: [[theme.colorTheme.color2], '!important']
        }
    },
    rowOdd: {
        '& > td' : {
            backgroundColor: theme.colorTheme.color4,
            color: theme.colorTheme.color8,
            fontSize: '2vh'
        },
        '&:hover > td' : {
            backgroundColor: [[theme.colorTheme.color2], '!important']
        }

    }
}))

const columns : ColumnsType<Name> = [
    {
        title: 'ID',
        dataIndex: 'id',
        sorter: (a, b) => a.id > b.id ? 1 : -1

    },
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name > b.name ? 1 : -1

    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        sorter: (a, b) => a.amount > b.amount ? 1 : -1
    },
  ];


function NamesTable({names, route} :Props) {

    const theme = useTheme()
    const classes = useStyles({theme})

    const getSummary = (summaryData :Name[]) => {

        let totalAmount = 0;

        summaryData.forEach(({ amount }) => {
          totalAmount += amount
        });

        return (
          <>
            <Table.Summary.Row className={classes.summary}>
              <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
              <Table.Summary.Cell index={1}></Table.Summary.Cell>
              <Table.Summary.Cell index={2}>{totalAmount}</Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        );

    }
 
    return (
        <>
            <Table<Name>
                className={classes.table}
                rowClassName={(record :Name, index :number) => index % 2 ? classes.rowEven : classes.rowOdd}
                rowKey="id"
                columns={columns}
                dataSource={names}
                pagination={false}
                bordered
                onRow={(data :Name, index? :number) => {
                    return {
                        onClick : () => {route(data.id.toString())}
                    }
                }}
                summary={getSummary}
            />
        </>
    )
    



}

export default NamesTable