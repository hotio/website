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
<tr><td><div id="tag11613" onclick="CopyToClipboard('tag11613');return false;" class="tag-decoration">nightly</div><div id="tag8313" onclick="CopyToClipboard('tag8313');return false;" class="tag-decoration">nightly-5285dfe</div><div id="tag21349" onclick="CopyToClipboard('tag21349');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/5285dfe68f06fac077f8bb068130aee9b073d6e0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29329507908" target="_blank">2026-07-14 11:36:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4648" onclick="CopyToClipboard('tag4648');return false;" class="tag-decoration">release</div><div id="tag22854" onclick="CopyToClipboard('tag22854');return false;" class="tag-decoration">release-2f98948</div><div id="tag29525" onclick="CopyToClipboard('tag29525');return false;" class="tag-decoration">release-0.15.2</div><div id="tag8620" onclick="CopyToClipboard('tag8620');return false;" class="tag-decoration">release-v0</div><div id="tag2465" onclick="CopyToClipboard('tag2465');return false;" class="tag-decoration">release-v0.15</div><div id="tag23377" onclick="CopyToClipboard('tag23377');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/2f989481e7fb01a32241def1608ff76cc1297554" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29356730777" target="_blank">2026-07-14 18:09:40</a></td></tr>
<tr><td><div id="tag30913" onclick="CopyToClipboard('tag30913');return false;" class="tag-decoration">testing</div><div id="tag13215" onclick="CopyToClipboard('tag13215');return false;" class="tag-decoration">testing-4937435</div><div id="tag26647" onclick="CopyToClipboard('tag26647');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag25020" onclick="CopyToClipboard('tag25020');return false;" class="tag-decoration">testing-v0</div><div id="tag16466" onclick="CopyToClipboard('tag16466');return false;" class="tag-decoration">testing-v0.15</div><div id="tag23469" onclick="CopyToClipboard('tag23469');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/4937435847490c82f9337238c963e3f9bc781d96" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29329513662" target="_blank">2026-07-14 11:36:49</a></td></tr>
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
