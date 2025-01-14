import PropTypes from "prop-types";
import { SubText } from "../ui/Typography";
import { Line, Table, TableHead, TableHeading, TableHeadingTime } from "./styled";
import TrackRow from "./TrackRow";

function TracksTable({ tracks }) {
  console.log(tracks);
  return (
    <Table cellSpacing={0}>
      <TableHead>
        <tr>
          <TableHeading first>
            <SubText>#</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Song name</SubText>
          </TableHeading>
          <TableHeadingTime>
            <SubText>Time</SubText>
          </TableHeadingTime>
          <TableHeading>
            <SubText>Album name</SubText>
          </TableHeading>
          <TableHeading>
            <SubText>Actions</SubText>
          </TableHeading>
        </tr>
      </TableHead>
      <tbody>
        <tr>
          <Line colSpan={5}></Line>
        </tr>
        {tracks?.map((track, index) => (
          <TrackRow key={track.id} track={track} index={index} />
        ))}
      </tbody>
    </Table>
  );
}

TracksTable.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      duration: PropTypes.number,
      preview: PropTypes.string,
      artist: PropTypes.shape({
        name: PropTypes.string,
      }),
      album: PropTypes.shape({
        title: PropTypes.string,
        cover: PropTypes.string,
      }),
    }),
  ),
};

export default TracksTable;
