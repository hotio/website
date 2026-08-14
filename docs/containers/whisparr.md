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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10270" onclick="CopyToClipboard('tag10270');return false;" class="tag-decoration">v2</div><div id="tag113" onclick="CopyToClipboard('tag113');return false;" class="tag-decoration">v2-3f5ac2a</div><div id="tag24897" onclick="CopyToClipboard('tag24897');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag3127" onclick="CopyToClipboard('tag3127');return false;" class="tag-decoration">v2-v2</div><div id="tag25776" onclick="CopyToClipboard('tag25776');return false;" class="tag-decoration">v2-v2.2</div><div id="tag30768" onclick="CopyToClipboard('tag30768');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3f5ac2a7a7d1d8938d8f7decfb8ea2b089a2c2b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382138754" target="_blank">2026-07-28 17:16:17</a></td></tr>
<tr><td><div id="tag29277" onclick="CopyToClipboard('tag29277');return false;" class="tag-decoration">v2-develop</div><div id="tag15171" onclick="CopyToClipboard('tag15171');return false;" class="tag-decoration">v2-develop-3afcd2a</div><div id="tag11174" onclick="CopyToClipboard('tag11174');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag32380" onclick="CopyToClipboard('tag32380');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag3530" onclick="CopyToClipboard('tag3530');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag8520" onclick="CopyToClipboard('tag8520');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3afcd2a23ccb4f7888bb18d8c523d8d157a55911" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31624488627" target="_blank">2026-08-12 17:48:35</a></td></tr>
<tr><td><div id="tag2254" onclick="CopyToClipboard('tag2254');return false;" class="tag-decoration">v3</div><div id="tag26376" onclick="CopyToClipboard('tag26376');return false;" class="tag-decoration">v3-cd735a5</div><div id="tag6887" onclick="CopyToClipboard('tag6887');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag26126" onclick="CopyToClipboard('tag26126');return false;" class="tag-decoration">v3-v3</div><div id="tag19604" onclick="CopyToClipboard('tag19604');return false;" class="tag-decoration">v3-v3.3</div><div id="tag12254" onclick="CopyToClipboard('tag12254');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cd735a57cf515ba3f596f08b5b39a9c0725cffc3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382151601" target="_blank">2026-07-28 17:16:25</a></td></tr>
<tr><td><div id="tag19380" onclick="CopyToClipboard('tag19380');return false;" class="tag-decoration">v3-develop</div><div id="tag27392" onclick="CopyToClipboard('tag27392');return false;" class="tag-decoration">v3-develop-35e1ba4</div><div id="tag117" onclick="CopyToClipboard('tag117');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1084</div><div id="tag2615" onclick="CopyToClipboard('tag2615');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag15139" onclick="CopyToClipboard('tag15139');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag5353" onclick="CopyToClipboard('tag5353');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/35e1ba40d604acab940f2e6edb78dd86867bdd55" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31849426705" target="_blank">2026-08-14 23:10:47</a></td></tr>
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
