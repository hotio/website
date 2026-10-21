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
<tr><td><div id="tag27520" onclick="CopyToClipboard('tag27520');return false;" class="tag-decoration">nightly</div><div id="tag4382" onclick="CopyToClipboard('tag4382');return false;" class="tag-decoration">nightly-9edfe6a</div><div id="tag29297" onclick="CopyToClipboard('tag29297');return false;" class="tag-decoration">nightly-9748bcf63f38035074d6cfad6a407812c3da59d7</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/9edfe6af3538dd709c3f8afecdd1318279094b3f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39684019543" target="_blank">2026-10-21 22:06:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29688" onclick="CopyToClipboard('tag29688');return false;" class="tag-decoration">release</div><div id="tag17970" onclick="CopyToClipboard('tag17970');return false;" class="tag-decoration">release-72b5ac0</div><div id="tag15806" onclick="CopyToClipboard('tag15806');return false;" class="tag-decoration">release-5.1.3</div><div id="tag21224" onclick="CopyToClipboard('tag21224');return false;" class="tag-decoration">release-v5</div><div id="tag10720" onclick="CopyToClipboard('tag10720');return false;" class="tag-decoration">release-v5.1</div><div id="tag18899" onclick="CopyToClipboard('tag18899');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/72b5ac0b5d7f6b2f1f26a50c6a5585fbacbb0a98" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39652221342" target="_blank">2026-10-21 18:23:02</a></td></tr>
<tr><td><div id="tag30631" onclick="CopyToClipboard('tag30631');return false;" class="tag-decoration">testing</div><div id="tag20183" onclick="CopyToClipboard('tag20183');return false;" class="tag-decoration">testing-c6c599c</div><div id="tag26112" onclick="CopyToClipboard('tag26112');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c6c599c5f2cb1a29594a5947a29488156118eb29" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39652238071" target="_blank">2026-10-21 18:23:08</a></td></tr>
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
