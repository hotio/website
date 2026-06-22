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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3752" onclick="CopyToClipboard('tag3752');return false;" class="tag-decoration">v2</div><div id="tag29428" onclick="CopyToClipboard('tag29428');return false;" class="tag-decoration">v2-a514428</div><div id="tag20328" onclick="CopyToClipboard('tag20328');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag28883" onclick="CopyToClipboard('tag28883');return false;" class="tag-decoration">v2-v2</div><div id="tag29886" onclick="CopyToClipboard('tag29886');return false;" class="tag-decoration">v2-v2.2</div><div id="tag5561" onclick="CopyToClipboard('tag5561');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/a514428a53cc1c33b0acbc573e101f6122bb5afb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27988390033" target="_blank">2026-06-22 22:29:49</a></td></tr>
<tr><td><div id="tag20614" onclick="CopyToClipboard('tag20614');return false;" class="tag-decoration">v2-develop</div><div id="tag30529" onclick="CopyToClipboard('tag30529');return false;" class="tag-decoration">v2-develop-322bc44</div><div id="tag6811" onclick="CopyToClipboard('tag6811');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag9113" onclick="CopyToClipboard('tag9113');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag27653" onclick="CopyToClipboard('tag27653');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag425" onclick="CopyToClipboard('tag425');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/322bc44ff71a8e085afa10304311c49f7122b3db" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27988392736" target="_blank">2026-06-22 22:29:54</a></td></tr>
<tr><td><div id="tag7630" onclick="CopyToClipboard('tag7630');return false;" class="tag-decoration">v3</div><div id="tag5343" onclick="CopyToClipboard('tag5343');return false;" class="tag-decoration">v3-46bca41</div><div id="tag12060" onclick="CopyToClipboard('tag12060');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag31752" onclick="CopyToClipboard('tag31752');return false;" class="tag-decoration">v3-v3</div><div id="tag23507" onclick="CopyToClipboard('tag23507');return false;" class="tag-decoration">v3-v3.3</div><div id="tag4698" onclick="CopyToClipboard('tag4698');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/46bca41437faab2d4029371735993e26ac5e11f9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27988389852" target="_blank">2026-06-22 22:29:49</a></td></tr>
<tr><td><div id="tag14212" onclick="CopyToClipboard('tag14212');return false;" class="tag-decoration">v3-develop</div><div id="tag10131" onclick="CopyToClipboard('tag10131');return false;" class="tag-decoration">v3-develop-a7fbf47</div><div id="tag25565" onclick="CopyToClipboard('tag25565');return false;" class="tag-decoration">v3-develop-3.3.4-develop.796</div><div id="tag31076" onclick="CopyToClipboard('tag31076');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag19420" onclick="CopyToClipboard('tag19420');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag22791" onclick="CopyToClipboard('tag22791');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a7fbf47afe0892d5e9d6f13ce73132b7c21014f5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27988393445" target="_blank">2026-06-22 22:29:54</a></td></tr>
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
