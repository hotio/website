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
<tr><td><div id="tag18638" onclick="CopyToClipboard('tag18638');return false;" class="tag-decoration">nightly</div><div id="tag16465" onclick="CopyToClipboard('tag16465');return false;" class="tag-decoration">nightly-7d235bc</div><div id="tag1673" onclick="CopyToClipboard('tag1673');return false;" class="tag-decoration">nightly-1f5d8827f9940c85279e6b447e0e845e61b60229</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/7d235bce143c5f966ec0159e252b0d0594bd59bd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40516846975" target="_blank">2026-10-27 13:58:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6102" onclick="CopyToClipboard('tag6102');return false;" class="tag-decoration">release</div><div id="tag30814" onclick="CopyToClipboard('tag30814');return false;" class="tag-decoration">release-5cefd36</div><div id="tag16221" onclick="CopyToClipboard('tag16221');return false;" class="tag-decoration">release-5.1.3</div><div id="tag27163" onclick="CopyToClipboard('tag27163');return false;" class="tag-decoration">release-v5</div><div id="tag15539" onclick="CopyToClipboard('tag15539');return false;" class="tag-decoration">release-v5.1</div><div id="tag7419" onclick="CopyToClipboard('tag7419');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5cefd36ec5b88cecc0df3c5565d86fe3447dabc3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40516835496" target="_blank">2026-10-27 13:58:41</a></td></tr>
<tr><td><div id="tag10893" onclick="CopyToClipboard('tag10893');return false;" class="tag-decoration">testing</div><div id="tag30207" onclick="CopyToClipboard('tag30207');return false;" class="tag-decoration">testing-b267447</div><div id="tag23127" onclick="CopyToClipboard('tag23127');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b2674478b8c45212dc6aed5aef04053d20184607" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40568022947" target="_blank">2026-10-27 19:19:07</a></td></tr>
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
