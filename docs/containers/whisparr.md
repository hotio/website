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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14261" onclick="CopyToClipboard('tag14261');return false;" class="tag-decoration">v2</div><div id="tag24128" onclick="CopyToClipboard('tag24128');return false;" class="tag-decoration">v2-3f5ac2a</div><div id="tag31545" onclick="CopyToClipboard('tag31545');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag5499" onclick="CopyToClipboard('tag5499');return false;" class="tag-decoration">v2-v2</div><div id="tag11100" onclick="CopyToClipboard('tag11100');return false;" class="tag-decoration">v2-v2.2</div><div id="tag31234" onclick="CopyToClipboard('tag31234');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3f5ac2a7a7d1d8938d8f7decfb8ea2b089a2c2b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382138754" target="_blank">2026-07-28 17:16:17</a></td></tr>
<tr><td><div id="tag19970" onclick="CopyToClipboard('tag19970');return false;" class="tag-decoration">v2-develop</div><div id="tag25287" onclick="CopyToClipboard('tag25287');return false;" class="tag-decoration">v2-develop-3afcd2a</div><div id="tag15737" onclick="CopyToClipboard('tag15737');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag13842" onclick="CopyToClipboard('tag13842');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29235" onclick="CopyToClipboard('tag29235');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag1420" onclick="CopyToClipboard('tag1420');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3afcd2a23ccb4f7888bb18d8c523d8d157a55911" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31624488627" target="_blank">2026-08-12 17:48:35</a></td></tr>
<tr><td><div id="tag1388" onclick="CopyToClipboard('tag1388');return false;" class="tag-decoration">v3</div><div id="tag993" onclick="CopyToClipboard('tag993');return false;" class="tag-decoration">v3-cd735a5</div><div id="tag16976" onclick="CopyToClipboard('tag16976');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag22357" onclick="CopyToClipboard('tag22357');return false;" class="tag-decoration">v3-v3</div><div id="tag21244" onclick="CopyToClipboard('tag21244');return false;" class="tag-decoration">v3-v3.3</div><div id="tag19691" onclick="CopyToClipboard('tag19691');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cd735a57cf515ba3f596f08b5b39a9c0725cffc3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382151601" target="_blank">2026-07-28 17:16:25</a></td></tr>
<tr><td><div id="tag26462" onclick="CopyToClipboard('tag26462');return false;" class="tag-decoration">v3-develop</div><div id="tag23982" onclick="CopyToClipboard('tag23982');return false;" class="tag-decoration">v3-develop-7ff892a</div><div id="tag25937" onclick="CopyToClipboard('tag25937');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1092</div><div id="tag28842" onclick="CopyToClipboard('tag28842');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag3808" onclick="CopyToClipboard('tag3808');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag1567" onclick="CopyToClipboard('tag1567');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/7ff892abace653c6f20462b7b33666ca206d77cb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31858327640" target="_blank">2026-08-15 02:06:40</a></td></tr>
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
