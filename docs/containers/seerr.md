---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag19441" onclick="CopyToClipboard('tag19441');return false;" class="tag-decoration">nightly</div><div id="tag10446" onclick="CopyToClipboard('tag10446');return false;" class="tag-decoration">nightly-5e0b7c6</div><div id="tag6949" onclick="CopyToClipboard('tag6949');return false;" class="tag-decoration">nightly-f9be06872644eb780888add2119a27a490bd365c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/5e0b7c6fd3d2430a53378cdd69feffce7f947889" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/46045880708" target="_blank">2026-11-27 17:58:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30597" onclick="CopyToClipboard('tag30597');return false;" class="tag-decoration">release</div><div id="tag20956" onclick="CopyToClipboard('tag20956');return false;" class="tag-decoration">release-c65155a</div><div id="tag7696" onclick="CopyToClipboard('tag7696');return false;" class="tag-decoration">release-3.5.2</div><div id="tag17210" onclick="CopyToClipboard('tag17210');return false;" class="tag-decoration">release-v3</div><div id="tag23293" onclick="CopyToClipboard('tag23293');return false;" class="tag-decoration">release-v3.5</div><div id="tag13627" onclick="CopyToClipboard('tag13627');return false;" class="tag-decoration">release-v3.5.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/c65155a547e3f45ea47bcc8ab69ff6162d2679fe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/46092617807" target="_blank">2026-11-28 01:20:32</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
