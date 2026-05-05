---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28668" onclick="CopyToClipboard('tag28668');return false;" class="tag-decoration">release</div><div id="tag20537" onclick="CopyToClipboard('tag20537');return false;" class="tag-decoration">release-a35ee64</div><div id="tag25096" onclick="CopyToClipboard('tag25096');return false;" class="tag-decoration">release-2.17.1</div><div id="tag20320" onclick="CopyToClipboard('tag20320');return false;" class="tag-decoration">release-v2</div><div id="tag29979" onclick="CopyToClipboard('tag29979');return false;" class="tag-decoration">release-v2.17</div><div id="tag22294" onclick="CopyToClipboard('tag22294');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/a35ee6425fc44f5629d07346ee053ecb1b853267" target="_blank">Version update: 2.17.0 => 2.17.1</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25358323170" target="_blank">2026-05-05 04:45:21</a></td></tr>
<tr><td><div id="tag9817" onclick="CopyToClipboard('tag9817');return false;" class="tag-decoration">testing</div><div id="tag11710" onclick="CopyToClipboard('tag11710');return false;" class="tag-decoration">testing-e7929ac</div><div id="tag20350" onclick="CopyToClipboard('tag20350');return false;" class="tag-decoration">testing-2.17.1</div><div id="tag2260" onclick="CopyToClipboard('tag2260');return false;" class="tag-decoration">testing-v2</div><div id="tag8830" onclick="CopyToClipboard('tag8830');return false;" class="tag-decoration">testing-v2.17</div><div id="tag17475" onclick="CopyToClipboard('tag17475');return false;" class="tag-decoration">testing-v2.17.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/e7929ac19664aacb6b3858cc7f123f731bc72a52" target="_blank">Version update: 2.17.0 => 2.17.1</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25358323978" target="_blank">2026-05-05 04:45:24</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
