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
<tr><td><div id="tag3418" onclick="CopyToClipboard('tag3418');return false;" class="tag-decoration">nightly</div><div id="tag24210" onclick="CopyToClipboard('tag24210');return false;" class="tag-decoration">nightly-6e3d4b2</div><div id="tag21223" onclick="CopyToClipboard('tag21223');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/6e3d4b290b6ff8bf77cad759483a61ef975c955d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29356733291" target="_blank">2026-07-14 18:09:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7784" onclick="CopyToClipboard('tag7784');return false;" class="tag-decoration">release</div><div id="tag8054" onclick="CopyToClipboard('tag8054');return false;" class="tag-decoration">release-2f98948</div><div id="tag1998" onclick="CopyToClipboard('tag1998');return false;" class="tag-decoration">release-0.15.2</div><div id="tag23101" onclick="CopyToClipboard('tag23101');return false;" class="tag-decoration">release-v0</div><div id="tag650" onclick="CopyToClipboard('tag650');return false;" class="tag-decoration">release-v0.15</div><div id="tag3750" onclick="CopyToClipboard('tag3750');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/2f989481e7fb01a32241def1608ff76cc1297554" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29356730777" target="_blank">2026-07-14 18:09:40</a></td></tr>
<tr><td><div id="tag22569" onclick="CopyToClipboard('tag22569');return false;" class="tag-decoration">testing</div><div id="tag9125" onclick="CopyToClipboard('tag9125');return false;" class="tag-decoration">testing-4e7b916</div><div id="tag15048" onclick="CopyToClipboard('tag15048');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag22921" onclick="CopyToClipboard('tag22921');return false;" class="tag-decoration">testing-v0</div><div id="tag13467" onclick="CopyToClipboard('tag13467');return false;" class="tag-decoration">testing-v0.15</div><div id="tag13531" onclick="CopyToClipboard('tag13531');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/4e7b91668899f6d12358593b76fa8e1cfff1086c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29356728686" target="_blank">2026-07-14 18:09:38</a></td></tr>
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
