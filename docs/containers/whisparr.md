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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7139" onclick="CopyToClipboard('tag7139');return false;" class="tag-decoration">v2</div><div id="tag14387" onclick="CopyToClipboard('tag14387');return false;" class="tag-decoration">v2-3f5ac2a</div><div id="tag31028" onclick="CopyToClipboard('tag31028');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag4981" onclick="CopyToClipboard('tag4981');return false;" class="tag-decoration">v2-v2</div><div id="tag9" onclick="CopyToClipboard('tag9');return false;" class="tag-decoration">v2-v2.2</div><div id="tag28085" onclick="CopyToClipboard('tag28085');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3f5ac2a7a7d1d8938d8f7decfb8ea2b089a2c2b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382138754" target="_blank">2026-07-28 17:16:17</a></td></tr>
<tr><td><div id="tag2647" onclick="CopyToClipboard('tag2647');return false;" class="tag-decoration">v2-develop</div><div id="tag20958" onclick="CopyToClipboard('tag20958');return false;" class="tag-decoration">v2-develop-3afcd2a</div><div id="tag10064" onclick="CopyToClipboard('tag10064');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag28901" onclick="CopyToClipboard('tag28901');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag27893" onclick="CopyToClipboard('tag27893');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag22387" onclick="CopyToClipboard('tag22387');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3afcd2a23ccb4f7888bb18d8c523d8d157a55911" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31624488627" target="_blank">2026-08-12 17:48:35</a></td></tr>
<tr><td><div id="tag26251" onclick="CopyToClipboard('tag26251');return false;" class="tag-decoration">v3</div><div id="tag21266" onclick="CopyToClipboard('tag21266');return false;" class="tag-decoration">v3-cd735a5</div><div id="tag1273" onclick="CopyToClipboard('tag1273');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag8119" onclick="CopyToClipboard('tag8119');return false;" class="tag-decoration">v3-v3</div><div id="tag8879" onclick="CopyToClipboard('tag8879');return false;" class="tag-decoration">v3-v3.3</div><div id="tag26339" onclick="CopyToClipboard('tag26339');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cd735a57cf515ba3f596f08b5b39a9c0725cffc3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382151601" target="_blank">2026-07-28 17:16:25</a></td></tr>
<tr><td><div id="tag27256" onclick="CopyToClipboard('tag27256');return false;" class="tag-decoration">v3-develop</div><div id="tag22923" onclick="CopyToClipboard('tag22923');return false;" class="tag-decoration">v3-develop-b010dfe</div><div id="tag28241" onclick="CopyToClipboard('tag28241');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1067</div><div id="tag578" onclick="CopyToClipboard('tag578');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag17365" onclick="CopyToClipboard('tag17365');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag3702" onclick="CopyToClipboard('tag3702');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b010dfec9d4f0c673a27a8c105953716c16d7356" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31326142913" target="_blank">2026-08-09 17:20:26</a></td></tr>
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
