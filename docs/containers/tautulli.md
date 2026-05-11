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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30583" onclick="CopyToClipboard('tag30583');return false;" class="tag-decoration">release</div><div id="tag27410" onclick="CopyToClipboard('tag27410');return false;" class="tag-decoration">release-d3cff96</div><div id="tag19853" onclick="CopyToClipboard('tag19853');return false;" class="tag-decoration">release-2.17.1</div><div id="tag11758" onclick="CopyToClipboard('tag11758');return false;" class="tag-decoration">release-v2</div><div id="tag3711" onclick="CopyToClipboard('tag3711');return false;" class="tag-decoration">release-v2.17</div><div id="tag3761" onclick="CopyToClipboard('tag3761');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/d3cff96cc152787559e4989747f717f08e9930f6" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25664533914" target="_blank">2026-05-11 10:25:08</a></td></tr>
<tr><td><div id="tag791" onclick="CopyToClipboard('tag791');return false;" class="tag-decoration">testing</div><div id="tag25702" onclick="CopyToClipboard('tag25702');return false;" class="tag-decoration">testing-dd74b2a</div><div id="tag5054" onclick="CopyToClipboard('tag5054');return false;" class="tag-decoration">testing-2.17.1</div><div id="tag3409" onclick="CopyToClipboard('tag3409');return false;" class="tag-decoration">testing-v2</div><div id="tag6606" onclick="CopyToClipboard('tag6606');return false;" class="tag-decoration">testing-v2.17</div><div id="tag22928" onclick="CopyToClipboard('tag22928');return false;" class="tag-decoration">testing-v2.17.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/dd74b2a8bbfd956f8efb2ec957ffa093fddb88c5" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25664535567" target="_blank">2026-05-11 10:25:11</a></td></tr>
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
