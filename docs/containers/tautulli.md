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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24482" onclick="CopyToClipboard('tag24482');return false;" class="tag-decoration">release</div><div id="tag5811" onclick="CopyToClipboard('tag5811');return false;" class="tag-decoration">release-8aec7a7</div><div id="tag24882" onclick="CopyToClipboard('tag24882');return false;" class="tag-decoration">release-2.16.0</div><div id="tag4936" onclick="CopyToClipboard('tag4936');return false;" class="tag-decoration">release-v2</div><div id="tag19027" onclick="CopyToClipboard('tag19027');return false;" class="tag-decoration">release-v2.16</div><div id="tag8031" onclick="CopyToClipboard('tag8031');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/8aec7a7c75ffca0e5884ebeab32a25ef6eb2d6cd" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21244732401" target="_blank">2026-01-22 10:20:14</a></td></tr>
<tr><td><div id="tag26376" onclick="CopyToClipboard('tag26376');return false;" class="tag-decoration">testing</div><div id="tag31425" onclick="CopyToClipboard('tag31425');return false;" class="tag-decoration">testing-2dbeabc</div><div id="tag23371" onclick="CopyToClipboard('tag23371');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag4040" onclick="CopyToClipboard('tag4040');return false;" class="tag-decoration">testing-v2</div><div id="tag4061" onclick="CopyToClipboard('tag4061');return false;" class="tag-decoration">testing-v2.16</div><div id="tag2569" onclick="CopyToClipboard('tag2569');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/2dbeabc86874c950d45fbb189beb9de0946e22a3" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21243879126" target="_blank">2026-01-22 09:52:24</a></td></tr>
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
