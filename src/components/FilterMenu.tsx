import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoSearch } from "react-icons/io5";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function FilterMenu() {
  return (
    <>
      <div className="flex gap-x-2 m-9 ml-0">
        <div className="flex gap-x-2">
          <Input
            className="w-96"
            type="text"
            placeholder="Escribe el nombre que quieras buscar"
          ></Input>
          <Button variant={"secondary"}>
            <IoSearch />
          </Button>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Ordenar Por" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>elije un filtro</SelectLabel>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="banana">Destacados</SelectItem>
                <SelectItem value="blueberry">Mayor precio</SelectItem>
                <SelectItem value="grapes">Menos precio</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div></div>
      </div>
    </>
  );
}
