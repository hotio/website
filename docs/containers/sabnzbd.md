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
<tr><td><div id="tag44" onclick="CopyToClipboard('tag44');return false;" class="tag-decoration">nightly</div><div id="tag29708" onclick="CopyToClipboard('tag29708');return false;" class="tag-decoration">nightly-87897cd</div><div id="tag1861" onclick="CopyToClipboard('tag1861');return false;" class="tag-decoration">nightly-f498147189f325393c5b762279b8cf708aa37e56</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/87897cdd6e6b5ae0e20586c8ed80458f2886f349" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32842206373" target="_blank">2026-08-25 11:25:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16255" onclick="CopyToClipboard('tag16255');return false;" class="tag-decoration">release</div><div id="tag14387" onclick="CopyToClipboard('tag14387');return false;" class="tag-decoration">release-78674c7</div><div id="tag23426" onclick="CopyToClipboard('tag23426');return false;" class="tag-decoration">release-5.1.2</div><div id="tag22322" onclick="CopyToClipboard('tag22322');return false;" class="tag-decoration">release-v5</div><div id="tag5042" onclick="CopyToClipboard('tag5042');return false;" class="tag-decoration">release-v5.1</div><div id="tag7331" onclick="CopyToClipboard('tag7331');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/78674c77dfa11fda625a1d89e3d2fc74494ac63d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32861180549" target="_blank">2026-08-25 14:42:22</a></td></tr>
<tr><td><div id="tag3814" onclick="CopyToClipboard('tag3814');return false;" class="tag-decoration">testing</div><div id="tag29569" onclick="CopyToClipboard('tag29569');return false;" class="tag-decoration">testing-3af11ba</div><div id="tag11960" onclick="CopyToClipboard('tag11960');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag6570" onclick="CopyToClipboard('tag6570');return false;" class="tag-decoration">testing-v5</div><div id="tag15961" onclick="CopyToClipboard('tag15961');return false;" class="tag-decoration">testing-v5.1</div><div id="tag32519" onclick="CopyToClipboard('tag32519');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/3af11baf0e5de25c5c954bbebe93849021f8a259" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32861171373" target="_blank">2026-08-25 14:42:17</a></td></tr>
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
