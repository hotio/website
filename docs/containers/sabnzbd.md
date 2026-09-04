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
<tr><td><div id="tag17183" onclick="CopyToClipboard('tag17183');return false;" class="tag-decoration">nightly</div><div id="tag17541" onclick="CopyToClipboard('tag17541');return false;" class="tag-decoration">nightly-22a0ffd</div><div id="tag4558" onclick="CopyToClipboard('tag4558');return false;" class="tag-decoration">nightly-d25d857fc4c6d1d7c7bf9fffb718074d50cda325</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/22a0ffdb650fb6f1bcd1bf52a5fdcd0526bbce40" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33873141378" target="_blank">2026-09-04 12:30:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21050" onclick="CopyToClipboard('tag21050');return false;" class="tag-decoration">release</div><div id="tag16350" onclick="CopyToClipboard('tag16350');return false;" class="tag-decoration">release-046c8b0</div><div id="tag806" onclick="CopyToClipboard('tag806');return false;" class="tag-decoration">release-5.1.2</div><div id="tag19295" onclick="CopyToClipboard('tag19295');return false;" class="tag-decoration">release-v5</div><div id="tag29476" onclick="CopyToClipboard('tag29476');return false;" class="tag-decoration">release-v5.1</div><div id="tag14385" onclick="CopyToClipboard('tag14385');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/046c8b035e4a2da1cefa78ad73397a220cde3876" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33605402646" target="_blank">2026-09-02 07:48:06</a></td></tr>
<tr><td><div id="tag6569" onclick="CopyToClipboard('tag6569');return false;" class="tag-decoration">testing</div><div id="tag12591" onclick="CopyToClipboard('tag12591');return false;" class="tag-decoration">testing-e63a5b3</div><div id="tag29875" onclick="CopyToClipboard('tag29875');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag12136" onclick="CopyToClipboard('tag12136');return false;" class="tag-decoration">testing-v5</div><div id="tag3746" onclick="CopyToClipboard('tag3746');return false;" class="tag-decoration">testing-v5.1</div><div id="tag1901" onclick="CopyToClipboard('tag1901');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e63a5b3c1a38a713c4187abd18a1b561ce60f241" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33605398475" target="_blank">2026-09-02 07:48:03</a></td></tr>
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
