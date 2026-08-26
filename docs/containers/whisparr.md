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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32345" onclick="CopyToClipboard('tag32345');return false;" class="tag-decoration">v2</div><div id="tag14536" onclick="CopyToClipboard('tag14536');return false;" class="tag-decoration">v2-7521c04</div><div id="tag2924" onclick="CopyToClipboard('tag2924');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag24701" onclick="CopyToClipboard('tag24701');return false;" class="tag-decoration">v2-v2</div><div id="tag19481" onclick="CopyToClipboard('tag19481');return false;" class="tag-decoration">v2-v2.2</div><div id="tag19092" onclick="CopyToClipboard('tag19092');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/7521c04f7664e1015d5d821dabc467611f4e9972" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172201" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag13380" onclick="CopyToClipboard('tag13380');return false;" class="tag-decoration">v2-develop</div><div id="tag9588" onclick="CopyToClipboard('tag9588');return false;" class="tag-decoration">v2-develop-e4ff74c</div><div id="tag23690" onclick="CopyToClipboard('tag23690');return false;" class="tag-decoration">v2-develop-2.2.0-develop.213</div><div id="tag5276" onclick="CopyToClipboard('tag5276');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag23865" onclick="CopyToClipboard('tag23865');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag3312" onclick="CopyToClipboard('tag3312');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e4ff74ced1820f95c6ef4dd4cc6880199c8cc57b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33001476871" target="_blank">2026-08-26 18:45:39</a></td></tr>
<tr><td><div id="tag11634" onclick="CopyToClipboard('tag11634');return false;" class="tag-decoration">v3</div><div id="tag23132" onclick="CopyToClipboard('tag23132');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag28547" onclick="CopyToClipboard('tag28547');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag6294" onclick="CopyToClipboard('tag6294');return false;" class="tag-decoration">v3-v3</div><div id="tag20819" onclick="CopyToClipboard('tag20819');return false;" class="tag-decoration">v3-v3.3</div><div id="tag10334" onclick="CopyToClipboard('tag10334');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag16147" onclick="CopyToClipboard('tag16147');return false;" class="tag-decoration">v3-develop</div><div id="tag23404" onclick="CopyToClipboard('tag23404');return false;" class="tag-decoration">v3-develop-f24470e</div><div id="tag22024" onclick="CopyToClipboard('tag22024');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1287</div><div id="tag24664" onclick="CopyToClipboard('tag24664');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag3025" onclick="CopyToClipboard('tag3025');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag4214" onclick="CopyToClipboard('tag4214');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f24470eebce674ed5adf53bd767840fb689bd026" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32953241622" target="_blank">2026-08-26 09:29:03</a></td></tr>
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
