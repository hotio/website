---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17010" onclick="CopyToClipboard('tag17010');return false;" class="tag-decoration">release</div><div id="tag27863" onclick="CopyToClipboard('tag27863');return false;" class="tag-decoration">release-8bac120</div><div id="tag3514" onclick="CopyToClipboard('tag3514');return false;" class="tag-decoration">release-8.9.0</div><div id="tag18315" onclick="CopyToClipboard('tag18315');return false;" class="tag-decoration">release-v8</div><div id="tag31749" onclick="CopyToClipboard('tag31749');return false;" class="tag-decoration">release-v8.9</div><div id="tag8391" onclick="CopyToClipboard('tag8391');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/8bac120e40294441201b713d0d3ecfe8271b59aa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/33382779169" target="_blank">2026-08-31 10:31:16</a></td></tr>
<tr><td><div id="tag11473" onclick="CopyToClipboard('tag11473');return false;" class="tag-decoration">testing</div><div id="tag25313" onclick="CopyToClipboard('tag25313');return false;" class="tag-decoration">testing-bdd7458</div><div id="tag26394" onclick="CopyToClipboard('tag26394');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag29762" onclick="CopyToClipboard('tag29762');return false;" class="tag-decoration">testing-v8</div><div id="tag144" onclick="CopyToClipboard('tag144');return false;" class="tag-decoration">testing-v8.9</div><div id="tag2404" onclick="CopyToClipboard('tag2404');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/bdd74587f8bd1d2fdf61b1e6c8cb081908145a8b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/33421921057" target="_blank">2026-08-31 17:52:21</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
