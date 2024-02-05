import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
import { add, play, showAll, showAllByArtist, showUnplayed, showUnplayedByArtist } from "./commands/index.js";

const COMMAND_EXPRESSIONS = {
  ADD: /^add "(.+)" "(.+)"$/,
  PLAY: /^play "(.+)"$/,
  SHOW_ALL: /^show all$/,
  SHOW_ALL_BY_ARTIST: /^show all by "(.+)"$/,
  SHOW_UNPLAYED: /^show unplayed$/,
  SHOW_UNPLAYED_BY_ARTIST: /^show unplayed by "(.+)"$/,
  QUIT: /^quit$/
};

const storage = {};
const rl = readline.createInterface({ input, output, prompt: "> " });
console.log("Welcome to your music collection!\n");
rl.prompt();

rl
  .on("line", (line) => {
    const trimmedLine = line.trim();

    switch (true) {
      case COMMAND_EXPRESSIONS.ADD.test(trimmedLine): {
        const [_, title, artist] = COMMAND_EXPRESSIONS.ADD.exec(trimmedLine);
        add(title, artist, storage);
        break;
      }
      case COMMAND_EXPRESSIONS.PLAY.test(trimmedLine): {
        const [_, title] = COMMAND_EXPRESSIONS.PLAY.exec(trimmedLine);
        play(title, storage);
        break;
      }
      case COMMAND_EXPRESSIONS.SHOW_ALL.test(trimmedLine): {
        showAll(storage);
        break;
      }
      case COMMAND_EXPRESSIONS.SHOW_ALL_BY_ARTIST.test(trimmedLine): {
        const [_, artist] = COMMAND_EXPRESSIONS.SHOW_ALL_BY_ARTIST.exec(trimmedLine);
        showAllByArtist(artist, storage);
        break;
      }
      case COMMAND_EXPRESSIONS.SHOW_UNPLAYED.test(trimmedLine): {
        showUnplayed(storage);
        break;
      }
      case COMMAND_EXPRESSIONS.SHOW_UNPLAYED_BY_ARTIST.test(trimmedLine): {
        const [_, artist] = COMMAND_EXPRESSIONS.SHOW_UNPLAYED_BY_ARTIST.exec(trimmedLine);
        showUnplayedByArtist(artist, storage);
        break;
      }
      case COMMAND_EXPRESSIONS.QUIT.test(trimmedLine): {
        rl.emit("close");
        break;
      }
      default:
        console.log(`"${line.trim()}" was not a vaild command. Please try again.`);
        break;
    }

    console.log(""); // Print a newline deliberately
    rl.prompt();
  }).on("close", () => {
    console.log("Bye!");
    process.exit(0);
  }); 