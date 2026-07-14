---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag2611" onclick="CopyToClipboard('tag2611');return false;" class="tag-decoration">nightly</div><div id="tag15701" onclick="CopyToClipboard('tag15701');return false;" class="tag-decoration">nightly-5285dfe</div><div id="tag29018" onclick="CopyToClipboard('tag29018');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/5285dfe68f06fac077f8bb068130aee9b073d6e0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29329507908" target="_blank">2026-07-14 11:36:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6011" onclick="CopyToClipboard('tag6011');return false;" class="tag-decoration">release</div><div id="tag3145" onclick="CopyToClipboard('tag3145');return false;" class="tag-decoration">release-00509e3</div><div id="tag18439" onclick="CopyToClipboard('tag18439');return false;" class="tag-decoration">release-0.15.2</div><div id="tag17744" onclick="CopyToClipboard('tag17744');return false;" class="tag-decoration">release-v0</div><div id="tag11793" onclick="CopyToClipboard('tag11793');return false;" class="tag-decoration">release-v0.15</div><div id="tag4303" onclick="CopyToClipboard('tag4303');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/00509e32d38eff3adfb0ad07c1693aec32d5e8c1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29329508110" target="_blank">2026-07-14 11:36:44</a></td></tr>
<tr><td><div id="tag30909" onclick="CopyToClipboard('tag30909');return false;" class="tag-decoration">testing</div><div id="tag8873" onclick="CopyToClipboard('tag8873');return false;" class="tag-decoration">testing-4937435</div><div id="tag32070" onclick="CopyToClipboard('tag32070');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag23940" onclick="CopyToClipboard('tag23940');return false;" class="tag-decoration">testing-v0</div><div id="tag31293" onclick="CopyToClipboard('tag31293');return false;" class="tag-decoration">testing-v0.15</div><div id="tag17406" onclick="CopyToClipboard('tag17406');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/4937435847490c82f9337238c963e3f9bc781d96" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29329513662" target="_blank">2026-07-14 11:36:49</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
