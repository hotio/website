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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4332" onclick="CopyToClipboard('tag4332');return false;" class="tag-decoration">v2</div><div id="tag23353" onclick="CopyToClipboard('tag23353');return false;" class="tag-decoration">v2-3f5ac2a</div><div id="tag26698" onclick="CopyToClipboard('tag26698');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag30268" onclick="CopyToClipboard('tag30268');return false;" class="tag-decoration">v2-v2</div><div id="tag31902" onclick="CopyToClipboard('tag31902');return false;" class="tag-decoration">v2-v2.2</div><div id="tag5571" onclick="CopyToClipboard('tag5571');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3f5ac2a7a7d1d8938d8f7decfb8ea2b089a2c2b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382138754" target="_blank">2026-07-28 17:16:17</a></td></tr>
<tr><td><div id="tag26583" onclick="CopyToClipboard('tag26583');return false;" class="tag-decoration">v2-develop</div><div id="tag9019" onclick="CopyToClipboard('tag9019');return false;" class="tag-decoration">v2-develop-3afcd2a</div><div id="tag30739" onclick="CopyToClipboard('tag30739');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag5" onclick="CopyToClipboard('tag5');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag8561" onclick="CopyToClipboard('tag8561');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag4139" onclick="CopyToClipboard('tag4139');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3afcd2a23ccb4f7888bb18d8c523d8d157a55911" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31624488627" target="_blank">2026-08-12 17:48:35</a></td></tr>
<tr><td><div id="tag31679" onclick="CopyToClipboard('tag31679');return false;" class="tag-decoration">v3</div><div id="tag1009" onclick="CopyToClipboard('tag1009');return false;" class="tag-decoration">v3-cd735a5</div><div id="tag20005" onclick="CopyToClipboard('tag20005');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag15563" onclick="CopyToClipboard('tag15563');return false;" class="tag-decoration">v3-v3</div><div id="tag11546" onclick="CopyToClipboard('tag11546');return false;" class="tag-decoration">v3-v3.3</div><div id="tag1223" onclick="CopyToClipboard('tag1223');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cd735a57cf515ba3f596f08b5b39a9c0725cffc3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382151601" target="_blank">2026-07-28 17:16:25</a></td></tr>
<tr><td><div id="tag10824" onclick="CopyToClipboard('tag10824');return false;" class="tag-decoration">v3-develop</div><div id="tag9324" onclick="CopyToClipboard('tag9324');return false;" class="tag-decoration">v3-develop-231aa78</div><div id="tag16728" onclick="CopyToClipboard('tag16728');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1077</div><div id="tag570" onclick="CopyToClipboard('tag570');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag7275" onclick="CopyToClipboard('tag7275');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag7563" onclick="CopyToClipboard('tag7563');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/231aa786f8862e19c38d78bc6935b3dd56a21129" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31837421098" target="_blank">2026-08-14 20:19:58</a></td></tr>
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
