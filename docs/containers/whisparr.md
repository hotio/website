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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20417" onclick="CopyToClipboard('tag20417');return false;" class="tag-decoration">v2</div><div id="tag29631" onclick="CopyToClipboard('tag29631');return false;" class="tag-decoration">v2-b7bb03d</div><div id="tag19915" onclick="CopyToClipboard('tag19915');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag5559" onclick="CopyToClipboard('tag5559');return false;" class="tag-decoration">v2-v2</div><div id="tag30999" onclick="CopyToClipboard('tag30999');return false;" class="tag-decoration">v2-v2.3</div><div id="tag7933" onclick="CopyToClipboard('tag7933');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b7bb03db4649267de6c2d399ca8957f248d00161" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/46097445406" target="_blank">2026-11-28 02:18:49</a></td></tr>
<tr><td><div id="tag19881" onclick="CopyToClipboard('tag19881');return false;" class="tag-decoration">v2-develop</div><div id="tag2742" onclick="CopyToClipboard('tag2742');return false;" class="tag-decoration">v2-develop-6ff81ab</div><div id="tag13874" onclick="CopyToClipboard('tag13874');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag22179" onclick="CopyToClipboard('tag22179');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag31520" onclick="CopyToClipboard('tag31520');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag3082" onclick="CopyToClipboard('tag3082');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6ff81abe219bf6e8d387b5cfb76f61f9e7524de7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/46097449125" target="_blank">2026-11-28 02:18:51</a></td></tr>
<tr><td><div id="tag4552" onclick="CopyToClipboard('tag4552');return false;" class="tag-decoration">v3</div><div id="tag17782" onclick="CopyToClipboard('tag17782');return false;" class="tag-decoration">v3-19de71a</div><div id="tag16890" onclick="CopyToClipboard('tag16890');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag15515" onclick="CopyToClipboard('tag15515');return false;" class="tag-decoration">v3-v3</div><div id="tag26097" onclick="CopyToClipboard('tag26097');return false;" class="tag-decoration">v3-v3.6</div><div id="tag22299" onclick="CopyToClipboard('tag22299');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/19de71a9c0507e3d7a1c2093aa31b688063b7a32" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/46097452335" target="_blank">2026-11-28 02:18:53</a></td></tr>
<tr><td><div id="tag3363" onclick="CopyToClipboard('tag3363');return false;" class="tag-decoration">v3-develop</div><div id="tag19030" onclick="CopyToClipboard('tag19030');return false;" class="tag-decoration">v3-develop-3a1007f</div><div id="tag17122" onclick="CopyToClipboard('tag17122');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag10393" onclick="CopyToClipboard('tag10393');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag22428" onclick="CopyToClipboard('tag22428');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag27656" onclick="CopyToClipboard('tag27656');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3a1007f3461a2b63b0b97bec6f488d8b058a829f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/46097448317" target="_blank">2026-11-28 02:18:51</a></td></tr>
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
