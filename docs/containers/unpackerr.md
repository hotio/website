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
<tr><td><div id="tag21248" onclick="CopyToClipboard('tag21248');return false;" class="tag-decoration">nightly</div><div id="tag23083" onclick="CopyToClipboard('tag23083');return false;" class="tag-decoration">nightly-5285dfe</div><div id="tag4338" onclick="CopyToClipboard('tag4338');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/5285dfe68f06fac077f8bb068130aee9b073d6e0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29329507908" target="_blank">2026-07-14 11:36:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26890" onclick="CopyToClipboard('tag26890');return false;" class="tag-decoration">release</div><div id="tag8070" onclick="CopyToClipboard('tag8070');return false;" class="tag-decoration">release-2f98948</div><div id="tag3399" onclick="CopyToClipboard('tag3399');return false;" class="tag-decoration">release-0.15.2</div><div id="tag22347" onclick="CopyToClipboard('tag22347');return false;" class="tag-decoration">release-v0</div><div id="tag16274" onclick="CopyToClipboard('tag16274');return false;" class="tag-decoration">release-v0.15</div><div id="tag4915" onclick="CopyToClipboard('tag4915');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/2f989481e7fb01a32241def1608ff76cc1297554" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29356730777" target="_blank">2026-07-14 18:09:40</a></td></tr>
<tr><td><div id="tag8795" onclick="CopyToClipboard('tag8795');return false;" class="tag-decoration">testing</div><div id="tag2348" onclick="CopyToClipboard('tag2348');return false;" class="tag-decoration">testing-4e7b916</div><div id="tag23807" onclick="CopyToClipboard('tag23807');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag32499" onclick="CopyToClipboard('tag32499');return false;" class="tag-decoration">testing-v0</div><div id="tag27833" onclick="CopyToClipboard('tag27833');return false;" class="tag-decoration">testing-v0.15</div><div id="tag18851" onclick="CopyToClipboard('tag18851');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/4e7b91668899f6d12358593b76fa8e1cfff1086c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29356728686" target="_blank">2026-07-14 18:09:38</a></td></tr>
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
