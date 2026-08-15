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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10426" onclick="CopyToClipboard('tag10426');return false;" class="tag-decoration">v2</div><div id="tag28580" onclick="CopyToClipboard('tag28580');return false;" class="tag-decoration">v2-48e736e</div><div id="tag26167" onclick="CopyToClipboard('tag26167');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag17239" onclick="CopyToClipboard('tag17239');return false;" class="tag-decoration">v2-v2</div><div id="tag15284" onclick="CopyToClipboard('tag15284');return false;" class="tag-decoration">v2-v2.2</div><div id="tag21199" onclick="CopyToClipboard('tag21199');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/48e736ec271d3cb1f3e10673957ae8d3ce31debc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876511625" target="_blank">2026-08-15 09:14:55</a></td></tr>
<tr><td><div id="tag18620" onclick="CopyToClipboard('tag18620');return false;" class="tag-decoration">v2-develop</div><div id="tag18183" onclick="CopyToClipboard('tag18183');return false;" class="tag-decoration">v2-develop-8ec4964</div><div id="tag30016" onclick="CopyToClipboard('tag30016');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag13725" onclick="CopyToClipboard('tag13725');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag21828" onclick="CopyToClipboard('tag21828');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag22479" onclick="CopyToClipboard('tag22479');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8ec49643200d855c4b302b73c88392f7853bfa7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513938" target="_blank">2026-08-15 09:14:59</a></td></tr>
<tr><td><div id="tag3655" onclick="CopyToClipboard('tag3655');return false;" class="tag-decoration">v3</div><div id="tag5208" onclick="CopyToClipboard('tag5208');return false;" class="tag-decoration">v3-25c55fb</div><div id="tag18767" onclick="CopyToClipboard('tag18767');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag26614" onclick="CopyToClipboard('tag26614');return false;" class="tag-decoration">v3-v3</div><div id="tag25547" onclick="CopyToClipboard('tag25547');return false;" class="tag-decoration">v3-v3.3</div><div id="tag23806" onclick="CopyToClipboard('tag23806');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/25c55fb5b73a213ff854e4077eb47e3d4702374a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513222" target="_blank">2026-08-15 09:14:58</a></td></tr>
<tr><td><div id="tag1548" onclick="CopyToClipboard('tag1548');return false;" class="tag-decoration">v3-develop</div><div id="tag29165" onclick="CopyToClipboard('tag29165');return false;" class="tag-decoration">v3-develop-6cbe2c8</div><div id="tag15479" onclick="CopyToClipboard('tag15479');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1094</div><div id="tag14543" onclick="CopyToClipboard('tag14543');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag12107" onclick="CopyToClipboard('tag12107');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag29478" onclick="CopyToClipboard('tag29478');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6cbe2c802b4200d4f8734b367542e30de7302689" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31903296055" target="_blank">2026-08-15 19:13:08</a></td></tr>
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
