---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag16172" onclick="CopyToClipboard('tag16172');return false;" class="tag-decoration">nightly</div><div id="tag18399" onclick="CopyToClipboard('tag18399');return false;" class="tag-decoration">nightly-1a0edae</div><div id="tag4052" onclick="CopyToClipboard('tag4052');return false;" class="tag-decoration">nightly-972f4832c1edbc1c9d056bbb71f4c29055c4c399</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/1a0edae8c3548b5d8f78a0a1bcc24665db7035fd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27986959078" target="_blank">2026-06-22 22:01:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25067" onclick="CopyToClipboard('tag25067');return false;" class="tag-decoration">release</div><div id="tag23663" onclick="CopyToClipboard('tag23663');return false;" class="tag-decoration">release-f242b9f</div><div id="tag11997" onclick="CopyToClipboard('tag11997');return false;" class="tag-decoration">release-5.0.4</div><div id="tag7637" onclick="CopyToClipboard('tag7637');return false;" class="tag-decoration">release-v5</div><div id="tag25182" onclick="CopyToClipboard('tag25182');return false;" class="tag-decoration">release-v5.0</div><div id="tag21911" onclick="CopyToClipboard('tag21911');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f242b9fd1f72aaa4fa3dabd9a872d8497eab7f11" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27986957234" target="_blank">2026-06-22 22:01:06</a></td></tr>
<tr><td><div id="tag20795" onclick="CopyToClipboard('tag20795');return false;" class="tag-decoration">testing</div><div id="tag9957" onclick="CopyToClipboard('tag9957');return false;" class="tag-decoration">testing-cbbe932</div><div id="tag5585" onclick="CopyToClipboard('tag5585');return false;" class="tag-decoration">testing-5.1.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/cbbe93297b7ad142a3a91f2192ffa94511ff8531" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27986957041" target="_blank">2026-06-22 22:01:06</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
