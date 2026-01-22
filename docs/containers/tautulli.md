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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30345" onclick="CopyToClipboard('tag30345');return false;" class="tag-decoration">release</div><div id="tag4347" onclick="CopyToClipboard('tag4347');return false;" class="tag-decoration">release-8aec7a7</div><div id="tag9454" onclick="CopyToClipboard('tag9454');return false;" class="tag-decoration">release-2.16.0</div><div id="tag5977" onclick="CopyToClipboard('tag5977');return false;" class="tag-decoration">release-v2</div><div id="tag13423" onclick="CopyToClipboard('tag13423');return false;" class="tag-decoration">release-v2.16</div><div id="tag5475" onclick="CopyToClipboard('tag5475');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/8aec7a7c75ffca0e5884ebeab32a25ef6eb2d6cd" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21244732401" target="_blank">2026-01-22 10:20:14</a></td></tr>
<tr><td><div id="tag11048" onclick="CopyToClipboard('tag11048');return false;" class="tag-decoration">testing</div><div id="tag17176" onclick="CopyToClipboard('tag17176');return false;" class="tag-decoration">testing-a365c2f</div><div id="tag2069" onclick="CopyToClipboard('tag2069');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag19293" onclick="CopyToClipboard('tag19293');return false;" class="tag-decoration">testing-v2</div><div id="tag16551" onclick="CopyToClipboard('tag16551');return false;" class="tag-decoration">testing-v2.16</div><div id="tag5385" onclick="CopyToClipboard('tag5385');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/a365c2f1de78635b4d6052f3452ebd474ddc9545" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21244733286" target="_blank">2026-01-22 10:20:16</a></td></tr>
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
