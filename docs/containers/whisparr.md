---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10603" onclick="CopyToClipboard('tag10603');return false;" class="tag-decoration">v2</div><div id="tag18144" onclick="CopyToClipboard('tag18144');return false;" class="tag-decoration">v2-f568107</div><div id="tag16197" onclick="CopyToClipboard('tag16197');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag15985" onclick="CopyToClipboard('tag15985');return false;" class="tag-decoration">v2-v2</div><div id="tag29" onclick="CopyToClipboard('tag29');return false;" class="tag-decoration">v2-v2.2</div><div id="tag11943" onclick="CopyToClipboard('tag11943');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f5681079493172e77f97b091fe3638da1641a183" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715061311" target="_blank">2026-05-12 05:19:58</a></td></tr>
<tr><td><div id="tag15717" onclick="CopyToClipboard('tag15717');return false;" class="tag-decoration">v2-develop</div><div id="tag16737" onclick="CopyToClipboard('tag16737');return false;" class="tag-decoration">v2-develop-4c7e8ff</div><div id="tag55" onclick="CopyToClipboard('tag55');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag8789" onclick="CopyToClipboard('tag8789');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag4894" onclick="CopyToClipboard('tag4894');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag21311" onclick="CopyToClipboard('tag21311');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4c7e8ffb407f9eb8714154a45697eb524bd0fa75" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707338957" target="_blank">2026-05-12 01:20:21</a></td></tr>
<tr><td><div id="tag29160" onclick="CopyToClipboard('tag29160');return false;" class="tag-decoration">v3</div><div id="tag24098" onclick="CopyToClipboard('tag24098');return false;" class="tag-decoration">v3-4140480</div><div id="tag11655" onclick="CopyToClipboard('tag11655');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag27231" onclick="CopyToClipboard('tag27231');return false;" class="tag-decoration">v3-v3</div><div id="tag28001" onclick="CopyToClipboard('tag28001');return false;" class="tag-decoration">v3-v3.3</div><div id="tag7804" onclick="CopyToClipboard('tag7804');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4140480c2ce34f60534ffc64ab7471f14ad44ac2" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25707351361" target="_blank">2026-05-12 01:20:42</a></td></tr>
<tr><td><div id="tag7334" onclick="CopyToClipboard('tag7334');return false;" class="tag-decoration">v3-develop</div><div id="tag32570" onclick="CopyToClipboard('tag32570');return false;" class="tag-decoration">v3-develop-74323f5</div><div id="tag13199" onclick="CopyToClipboard('tag13199');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag1277" onclick="CopyToClipboard('tag1277');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag29055" onclick="CopyToClipboard('tag29055');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag14509" onclick="CopyToClipboard('tag14509');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/74323f5706ccfc9ae6ff2f109e9ad4852813dbbe" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715064250" target="_blank">2026-05-12 05:20:02</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
